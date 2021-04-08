import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import './ShareButton.css';

function ShareButton(props) {
  const { deputyName, newsTitle, link } = props;
  const handleTweetShare = () => {
    const shareMessage = `Confira a notícia sobre o deputado ${deputyName}: ${newsTitle} Via parlamentaqui.com/#news`;
    const twitterString = `https://twitter.com/share?url=${link}&text=${shareMessage}`;
    const win = window.open(twitterString, '_blank');
    win.focus();
  };
  const handleWppShare = () => {
    const shareMessage = `Confira a notícia sobre o deputado ${deputyName}: ${newsTitle} Via parlamentaqui.com/#news`;
    const wppString = `https://api.whatsapp.com/send?text=${shareMessage}`;
    const win = window.open(wppString, '_blank');
    win.focus();
  };
  const handleFaceShare = () => {
    const faceString = 'https://www.facebook.com/sharer/sharer.php?href=#news';
    const win = window.open(faceString, '_blank');
    win.focus();
  };
  return (
    <div className="align">
      {['top'].map((placement) => (
        <OverlayTrigger
          className="cor"
          trigger="click"
          key={placement}
          placement={placement}
          overlay={(
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Content className="cor">
                <Button onClick={handleWppShare}>
                  <img src="/images/WhatsappIcon.svg" className="d-inline-block imagem" alt="WhatsappButton" />
                </Button>
                <Button onClick={handleFaceShare}>
                  <img src="/images/FacebookIcon.svg" className="d-inline-block imagem" alt="FacebookButton" />
                </Button>
                <Button onClick={handleTweetShare}>
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
            <img src="/images/ShareButtonIcon.svg" className="imagem" alt="SearchButton" />
          </Button>
        </OverlayTrigger>
      ))}
    </div>
  );
}
export default ShareButton;
