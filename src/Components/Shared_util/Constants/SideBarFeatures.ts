import {AiFillHome, AiFillEye} from 'react-icons/ai'
import {FaPeopleCarry,  FaPrayingHands, FaHandHoldingHeart, FaUsers , FaUserCog, FaHandsHelping, FaHistory} from 'react-icons/fa'
import {GoVerified} from "react-icons/go"
import {BiLoaderCircle, BiDonateHeart} from 'react-icons/bi'
import {SiCodereview} from 'react-icons/si'
import {MdCampaign} from 'react-icons/md'
import {BsPostcardHeart} from 'react-icons/bs'
import {RiUserSettingsFill} from 'react-icons/ri'
import { SideBarFeaturesProp } from './Types'



export const donorFeatures: SideBarFeaturesProp['features'] = [
    {
        title: 'Feed',
        icon : AiFillHome,
        link : ''
    },
    {
        title: 'Charity Foundations',
        icon : FaPeopleCarry,
        link: 'viewCharities'
    },
    {
        title: 'View Campaigns',
        icon: MdCampaign,
        link: 'viewRequests'
    },
    // {
    //     title: 'Make Donation',
    //     icon: BiDonateHeart,
    //     link: 'makeDonations'
    // },
    {
        title:'Donation History',
        icon: FaHistory,
        link: 'donationProgress'
    },
    {
        title: 'Review Charities',
        icon: SiCodereview,
        link: 'reviewCharities'
    },
    {
        title : 'Profile',
        icon : FaUserCog,
        link : 'editProfile'
    }

]


export const adminFeatures = [
    {
        title: 'Overview',
        icon : AiFillHome,
        link : ''
    },
    {
        title: 'Charity Foundations',
        icon : FaPeopleCarry,
        link: 'viewCharities'
    },
    {
        title: 'Donations',
        icon : FaHandHoldingHeart,
        link : 'approveDonations'
    },
    {
        title: 'Campaigns',
        icon :  MdCampaign,
        link : 'approveRequests'
    },
    {
        title: 'Manage Organisations',
        icon : FaUsers,
        link : 'verifyRegistration'
    },
    {
        title: 'Verify Organisations',
        icon : GoVerified,
        link : 'verify'
    },
    {
        title: 'Manage Donors',
        icon : FaUserCog,
        link : 'manageDonorsAccount'
    },
   

]

export const charityFeatures = [
    {
        title: 'Feed',
        icon : AiFillHome,
        link : ''
    },
    {
        title:'Create Campaign',
        icon:  MdCampaign,
        link: 'makeRequest'
    },
    {
        title:'Campaign History',
        icon: FaHistory,
        link: 'requestProgress'
    },
    {
        title:'Donations',
        icon: BiDonateHeart,
        link: 'donationProgress'
    },
    {
        title:'Post',
        icon: BsPostcardHeart,
        link: 'post'
    },
    {
        title:'Profile',
        icon: RiUserSettingsFill,
        link: 'editProfile'
    },
   



]

