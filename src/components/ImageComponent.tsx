import copy from "copy-to-clipboard";
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
    copy(prompt);
    setCopySuccess("Copied!");
  };

  return (
    <div className="flex h-full w-1/2 cursor-pointer items-center justify-center object-contain transition-transform duration-300 ease-in-out hover:scale-110">
      <img
        src={imageUrl}
        alt={prompt}
        className="max-h-full max-w-full object-contain"
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "0px",
            borderRadius: "0px", // Remove round in modal border
          },
        }}
      >
        <div className="flex w-full items-center justify-center p-16">
          <img
            src={imageUrl}
            alt={prompt}
            className="sm:max-h-3/4 h-full max-h-96 w-full object-contain"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center text-white">
          <p className="text-m align-center mb-4 px-8 text-center font-light">
            {prompt}
          </p>
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
