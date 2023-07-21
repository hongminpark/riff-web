import copyToClipboard from "copy-to-clipboard";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // replace with your app element id

interface ImageProps {
  imageUrl: string;
  prompt: string;
}

const ImageComponent: React.FC<ImageProps> = ({ imageUrl, prompt }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const handleSave = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "download";
    link.click();
  };

  const handleCopy = () => {
    copyToClipboard(prompt);
    setCopySuccess("Copied!");
  };

  return (
    <div className="flex h-1/2 w-1/2 cursor-pointer items-center justify-center object-contain ">
      <Image
        src={imageUrl}
        alt={prompt}
        layout="fill"
        objectFit="contain"
        className="transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={() => setModalIsOpen(true)}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
          content: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            width: "80%",
            maxWidth: "640px",
            margin: "auto",
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "0px",
            borderRadius: "0px", // Remove round in modal border
          },
        }}
      >
        <div className="flex h-1/2 w-1/2 items-center justify-center">
          <Image
            src={imageUrl}
            alt={prompt}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center text-white">
          {prompt && (
            <p className="text-m align-center mb-4 px-8 text-center font-light">
              Original Prmopt | {prompt}
            </p>
          )}
          <button
            className="mb-2 w-32 border border-white px-2 text-sm font-light"
            onClick={handleSave}
          >
            SAVE IMAGE
          </button>
          <button
            className="w-32 border border-white px-2 text-sm font-light"
            onClick={handleCopy}
          >
            COPY PROMPT
          </button>
          {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}
        </div>
      </Modal>
    </div>
  );
};

export default ImageComponent;
