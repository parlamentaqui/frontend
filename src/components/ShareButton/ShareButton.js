import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import './ShareButton.css';
import { useHistory } from 'react-router-dom';

function ShareButton() {
  const history = useHistory();
  const urlAtual = history.location.pathname;
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
                <Button>
                  <a href={`whatsapp://send?text=${urlAtual}`} data-action="share/whatsapp/share" onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" title="Share on whatsapp" />
                  <img src="/images/WhatsappIcon.svg" className="d-inline-block imagem" alt="WhatsappButton" />
                </Button>
                <Button>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlAtual}&t=<Confira esta notícia sobre {sexo ? 'o' : 'a'} deputadx nome>`} onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" title="Share on Facebook" />
                  <img src="/images/FacebookIcon.svg" className="d-inline-block imagem" alt="FacebookButton" />
                </Button>
                <Button>
                  <a href={`https://twitter.com/share?url=${urlAtual}&text=<Confira esta notícia sobre {sexo ? 'o' : 'a'} deputadx nome>`} onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" title="Share on Twitter" />
                  <img src="/images/TwitterIcon.svg" className="d-inline-block imagem" alt="TwitterButton" />
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
