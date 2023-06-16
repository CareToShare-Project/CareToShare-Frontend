import React from 'react';
import { DonatedItemProps} from '../Shared_util/Constants/Types';
import { Modal } from 'react-bootstrap';
import '../Shared_Styles/General/Styles.css'



const DonatedItemModal: React.FC<DonatedItemProps> = ({ show, setShow, details }) => {


    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            className='modal-container'
            style={{ width: '100%', height: 'max-content' }}>
            <Modal.Body style={{
                display: 'flex', width: '100%',
                flexDirection: 'column', padding: '20px', gap: '30px'
            }}>
                <div style={{width: "100%"}}>
                    <h4>Description</h4>
                    <div>{details?.description}</div>
                </div>
                <div style={{width: "100%"}}>
                    <img 
                        src={details?.itemPhoto} 
                        alt='item'
                        style={{width: '400px', height: '400px'}}/>
                </div>
        
            </Modal.Body>
        </Modal>
    );
}



export default DonatedItemModal;