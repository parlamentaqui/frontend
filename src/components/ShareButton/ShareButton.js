import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import './ShareButton.css';
// import { useHistory } from 'react-router-dom';

function ShareButton(props) {
  const { deputyName, newsTitle, link } = props;
  // const history = useHistory();
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
                  {/* <a href={`whatsapp://send?text=${urlAtual}`} data-action="share/whatsapp/share" onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" title="Share on whatsapp" /> */}
                  <img src="/images/WhatsappIcon.svg" className="d-inline-block imagem" alt="WhatsappButton" />
                </Button>
                <Button onClick={handleFaceShare}>
                  {/* <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlAtual}&t=<Confira esta notícia sobre {sexo ? 'o' : 'a'} deputadx nome>`} onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" title="Share on Facebook" /> */}
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
