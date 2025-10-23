import { useState } from 'react';
import './Datarow.css';
import ship from '../../assets/ship.svg';
import stage1 from '../../assets/stage1.svg';
import stage3 from '../../assets/stage3.svg';
import stage4 from '../../assets/stage4.svg';
import stage5 from '../../assets/stage5.svg';
import tick from '../../assets/tick.svg';
import { Card, Image, ListGroup, ProgressBar } from 'react-bootstrap';

function Datarowitem() {
  return (
    <>
        <div className="heading-cell">
        <p className="heading-label">
            Importer
        </p>
        </div>
        <div className="heading-cell">
            <div className="heading-label">
                <div><p className="underlined">SC10099009</p></div>
                <div><p className='m-0'>CIF</p></div>
            </div>
        </div>
        <div className="heading-cell">
            <div className="heading-label">
                <div><p className="m-0 underlined">10/10/2025</p></div>
                <div><p className="m-0">09:36 AM</p></div>
            </div>
        </div>        
        <div className="heading-cell">
            <p className="heading-label">
                PO-3567
            </p>
        </div>
        <div className="heading-cell">
            <p className="heading-label">
                E-Way Bill
            </p>
        </div>
    </>
  );
}

function Datarow() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => setIsOpen(!isOpen);

  return (
    <div className="expandable-box">
      <div className="box-header row-grid">
        <Datarowitem />
        <div className="box-button-wrapper">
            <div className="heading-cell">
                <p className="heading-label">
                    <Image src={ship} rounded className='ship-image-wrapper'/>
                </p>
            </div>
            <div className="heading-cell">
                <p className="heading-label">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    fill="currentColor" 
                    className="bi bi-plus-lg" 
                    viewBox="0 0 16 16">
                    <path fillRule="evenodd" 
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                    </svg>
                </p>
            </div>
    
            <div className="heading-cell">
                <p className="heading-label">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    fill="currentColor" 
                    className="bi bi-chat-square-fill" 
                    viewBox="0 0 16 16">
                    <path 
                    d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                    />
                    </svg>
                </p>
            </div>

            <div className="caret-cell">
                <div className="caret-button" onClick={toggleBox}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-caret-${isOpen ? 'up' : 'down'}-fill`}
                    viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>

            <div className="heading-cell">
                <p className="heading-label">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    fill="currentColor" 
                    className="bi bi-three-dots-vertical" 
                    viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                    />
                    </svg>
                </p>
            </div>

        </div>
      </div>

      {isOpen && (
        <div className="box-content-expanded">
          {/* Expanded content */}
          <div className="expanded-row">
            <div className="expanded-row-wrapper">
                <div className="expanded-section-top">
                    <div className="section-top-item">
                        <p>SCINN002658945</p>
                    </div>
                    <div className="section-top-item">
                        <div className="heading-label">
                            <div><p className="m-0 underlined">10/10/2025</p></div>
                            <div><p className="m-0">09:36 AM</p></div>
                        </div>
                    </div>
                    <div className="section-top-item">
                        <p>--Kg</p>
                    </div>
                    <div className="section-top-item">
                        <p id='status'>Bill Of Entry Extracted</p>
                    </div>
                    <div className="section-top-item">
                        <div className="btn btn-light">
                            Details
                        </div>
                    </div>
                    <div className="section-top-btn-wrapper">
                        <div className="section-top-item">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="currentColor" 
                            className="bi bi-bell-fill" 
                            viewBox="0 0 16 16">
                            <path 
                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"
                            />
                            </svg>
                        </div>
                        <div className="section-top-item">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="currentColor" 
                            className="bi bi-geo-alt-fill" 
                            viewBox="0 0 16 16">
                            <path 
                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                            className='geo-color'/>
                            </svg>
                        </div>
                        <div className="section-top-item">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="currentColor" 
                            className="bi bi-three-dots-vertical" 
                            viewBox="0 0 16 16">
                            <path 
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                            />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="expanded-section-bottom">
                    <div className="section-bottom-div-top">
                        <div className="sec-div">
                            <div className="item-disabled">
                                <p className='m-0'>Fright Forward</p>
                                <p className="sec-item m-0">Importer:Importer test 1</p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <div className="item-disabled">
                                <p className='m-0'>CHA:</p>
                            </div>
                            <div className="item-disabled">
                                <p className='m-0'>ETD:</p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <div className="item-disabled">
                                <p className='p-width'>Transporter:</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-bottom-div-top">
                        <div className="sec-div">
                            <div className="item-disabled">
                                <p className="m-0">Moving As Expected</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-bottom-div-middle">
                        <div className="btn btn-md btn-dark task-btn">Tasks</div>
                    </div>
                    <div className="section-bottom-div-bottom">
                        <div className="progress-wrapper">
                            <ProgressBar variant="success" now={40} />
                        </div>
                        <div className="stages-wrapper">
                            <div className="stage-item">
                                <Image src={stage1}  className='stage-image-wrapper'/>
                            </div>
                            <div className="stage-item">
                                <Image src={ship}  className='stage-image-wrapper'/>
                            </div>
                            <div className="stage-item">
                                <Image src={stage3}  className='stage-image-wrapper'/>
                            </div>
                            <div className="stage-item">
                                <Image src={stage4}  className='stage-image-wrapper'/>
                            </div>
                            <div className="stage-item">
                                <Image src={stage5}  className='stage-image-wrapper'/>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className="expanded-section-right">
                    <div className='p-1 task-header-title'><h5 className='pt-1 fw-bolder text-dark'>Tasks For Shipment</h5></div>
                    <div className='sec-right-card'>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="task-header-div">
                                        <div>
                                            <Image src={tick}  className='task-image-wrapper'/>
                                            <span>PO Sent</span>
                                        </div>
                                        <div>
                                            <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            fill="currentColor" 
                                            className="bi bi-arrow-up-right" 
                                            viewBox="0 0 16 16">
                                            <path 
                                            fillRule="evenodd" 
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                            />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='item-details-div'>
                                        <div className='item-details'><p className="m-0">Completed By:<span>Importer 1</span></p></div>           
                                        <div className='item-details m-0 '><p>16th,Oct 20:02</p></div>                    
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="task-header-div">
                                        <div>
                                            <Image src={tick}  className='task-image-wrapper'/>
                                            <span>PO Confirmed</span>
                                        </div>
                                        <div>
                                            <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            fill="currentColor" 
                                            className="bi bi-arrow-up-right" 
                                            viewBox="0 0 16 16">
                                            <path 
                                            fillRule="evenodd" 
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                            />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='item-details-div'>
                                        <div className='item-details'><p className=" m-0">Completed By:<span>Importer 1</span></p></div>           
                                        <div className='item-details m-0'><p>16th,Oct 20:02</p></div>                    
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="task-header-div">
                                        <div>
                                            <Image src={tick}  className='task-image-wrapper'/>
                                            <span>Updated SC</span>
                                        </div>
                                        <div>
                                            <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            fill="currentColor" 
                                            className="bi bi-arrow-up-right" 
                                            viewBox="0 0 16 16">
                                            <path 
                                            fillRule="evenodd" 
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                            />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='item-details-div'>
                                        <div className='item-details'><p className=" m-0">Completed By:<span>Importer 1</span></p></div>           
                                        <div className='item-details m-0'><p>16th,Oct 20:02</p></div>                    
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="task-header-div">
                                        <div>
                                            <Image src={tick}  className='task-image-wrapper'/>
                                            <span>Updated Shipping Documents</span>
                                        </div>
                                        <div>
                                            <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            fill="currentColor" 
                                            className="bi bi-arrow-up-right" 
                                            viewBox="0 0 16 16">
                                            <path 
                                            fillRule="evenodd" 
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                            />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='item-details-div'>
                                        <div className='item-details'><p className=" m-0">Completed By:<span>Importer 1</span></p></div>           
                                        <div className='item-details m-0'><p>16th,Oct 20:02</p></div>                    
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="task-header-div">
                                        <div>
                                            <Image src={tick}  className='task-image-wrapper'/>
                                            <span>Confirm Shipping Documents</span>
                                        </div>
                                        <div>
                                            <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            fill="currentColor" 
                                            className="bi bi-arrow-up-right" 
                                            viewBox="0 0 16 16">
                                            <path 
                                            fillRule="evenodd" 
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                            />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='item-details-div'>
                                        <div className='item-details'><p className=" m-0">Completed By:<span>Importer 1</span></p></div>           
                                        <div className='item-details m-0'><p>16th,Oct 20:02</p></div>                    
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="task-header-div">
                                        <div>
                                            <Image src={tick}  className='task-image-wrapper'/>
                                            <span>Shipment Documents Recieved</span>
                                        </div>
                                        <div>
                                            <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            fill="currentColor" 
                                            className="bi bi-arrow-up-right" 
                                            viewBox="0 0 16 16">
                                            <path 
                                            fillRule="evenodd" 
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                            />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='item-details-div'>
                                        <div className='item-details'><p className=" m-0">Completed By:<span>Importer 1</span></p></div>           
                                        <div className='item-details m-0'><p>16th,Oct 20:02</p></div>                    
                                    </div>
                                </ListGroup.Item>                               
                            </ListGroup>
                        </Card>



                    </div>
                    
                </div>
        
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Datarow
