import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import './ShareButton.css';

function ShareButton() {
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
                  <img src="/images/WhatsappIcon.svg" className="d-inline-block align-top" alt="WhatsappButton" />
                </Button>
                <Button>
                  <img src="/images/FacebookIcon.svg" className="d-inline-block align-top" alt="FacebookButton" />
                </Button>
                <Button>
                  <img src="/images/TwitterIcon.svg" className="d-inline-block align-top" alt="TwitterButton" />
                </Button>

              </Popover.Content>
            </Popover>
      )}
        >
          <Button variant="secondary">
            <img src="/images/share_button.svg" className="d-inline-block align-top imagem" alt="SearchButton" />
          </Button>
        </OverlayTrigger>
      ))}
    </div>
  );
}
export default ShareButton;
