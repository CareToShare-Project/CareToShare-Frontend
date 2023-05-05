import React from 'react';
import { GetStartedButton, RightSectionContainer} from './HomePageStyles';
import {useNavigate} from 'react-router-dom';
import {MdStart} from "react-icons/md"
import Loading from '../Shared_util/Loading/Loading';



function RightSection() {

    const navigate = useNavigate();
    const [showLoading, setLoading] = React.useState(false);
    
    const navigateTo = (path: string) => {
        
        setTimeout(()=>{
            navigate(`/${path}`);
        }, 2500)
        
        setLoading(true)

        
    }

    return (
        <RightSectionContainer>
            <div>
                <h3>Welcome to CareToShare Donation Platform</h3>
                <hr className='horizontal-line'></hr>
            </div>
            <GetStartedButton onClick={()=>navigate('login')}> 
                Get Started {<MdStart size={22} />} 
            </GetStartedButton>

            {showLoading && <Loading />}
        </RightSectionContainer>
    )
}

export default RightSection;