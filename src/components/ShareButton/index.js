import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import './index.css';

function ShareButton(props) {
  const { message, link, theme } = props;
  const handleTweetShare = () => {
    const twitterString = `https://twitter.com/share?url=${link}&text=${message}`;
    const win = window.open(twitterString, '_blank');
    win.focus();
  };
  const handleWppShare = () => {
    const wppString = `https://api.whatsapp.com/send?text=${link}%0a${message}`;
    const win = window.open(wppString, '_blank');
    win.focus();
  };
  const handleFaceShare = () => {
    const faceString = `https://www.facebook.com/sharer/sharer.php?u=${link}&quote=${message}`;
    const win = window.open(faceString, '_blank');
    win.focus();
  };
  return (
    <div className={`align ${theme}`}>
      {['top'].map((placement) => (
        <OverlayTrigger
          className="cor"
          trigger="click"
          key={placement}
          placement={placement}
          overlay={(
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Content className="cor">
                <Button variant="danger" onClick={handleWppShare}>
                  <img src="/images/WhatsappIcon.svg" className="d-inline-block imagem" alt="WhatsappButton" />
                </Button>
                <Button variant="danger" onClick={handleFaceShare}>
                  <img src="/images/FacebookIcon.svg" className="d-inline-block imagem" alt="FacebookButton" />
                </Button>
                <Button variant="danger" onClick={handleTweetShare}>
                  <img
                    src="/images/TwitterIcon.svg"
                    className="d-inline-block imagem"
                    alt="TwitterButton"
                  />
                </Button>
              </Popover.Content>
            </Popover>
      )}
        >
          <Button variant="secondary">
            {theme === 'dark' ? <img src="/images/ShareDeputyIcon.svg" className="imagem" alt="SearchButton" /> : <img src="/images/ShareButtonIcon.svg" className="imagem" alt="SearchButton" /> }
          </Button>
        </OverlayTrigger>
      ))}
    </div>
  );
}
export default ShareButton;
