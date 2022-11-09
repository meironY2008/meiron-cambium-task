import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector, useDispatch } from "react-redux";
import { getShortUrl } from "../Actions/ShortAction";

const LinkResult = ({ inputValue }) => {
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const { shortUrl, loading, error } = useSelector(
    (state) => state.shortReducer
  );
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const fetchShortenUrl = async (linkToShort) => {
    dispatch(getShortUrl(linkToShort));
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchShortenUrl(inputValue);
    }
  }, [inputValue]);

  if (error) {
    return <div className="message">Something went wrong...</div>;
  }

  if (loading) {
    return <div className="message">Loading...</div>;
  }

  return (
    <>
      {shortUrl && (
        <div className="result-container">
          <p>{shortUrl}</p>
          <div className="result-show">
            <CopyToClipboard text={shortUrl} onCopy={() => setCopied(true)}>
              <button className={copied ? "copied" : ""}>
                Copy to clipboard
              </button>
            </CopyToClipboard>
            {copied && <div>Copied</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default LinkResult;
