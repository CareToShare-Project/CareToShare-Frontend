import {AiFillHome, AiFillEye} from 'react-icons/ai'
import {FaPeopleCarry,  FaPrayingHands, FaHandHoldingHeart, FaUsers , FaUserCog} from 'react-icons/fa'
import {GoVerified} from "react-icons/go"
import {BiLoaderCircle, BiDonateHeart} from 'react-icons/bi'
import {SiCodereview} from 'react-icons/si'
import {MdCampaign} from 'react-icons/md'
import {BsFillHandThumbsUpFill} from 'react-icons/bs'
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
    {
        title: 'View Requests',
        icon: AiFillEye,
        link: 'request'
    },
    {
        title: 'Donate',
        icon: BiDonateHeart,
        link: 'makeDonations'
    },
    {
        title:'Check Progress',
        icon: BiLoaderCircle,
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
        title: 'Approve Donations',
        icon : FaHandHoldingHeart,
        link : 'approveDonations'
    },
    {
        title: 'Approve Request',
        icon : BsFillHandThumbsUpFill,
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
        title:'Available Donations',
        icon: BiDonateHeart,
        link: 'viewDonations'
    },
    {
        title:'Create Campaign',
        icon: FaPrayingHands,
        link: 'makeRequest'
    },
    {
        title:'Request Progress',
        icon: BiLoaderCircle,
        link: 'requestProgress'
    },
    {
        title:'Donation Progress',
        icon: BiLoaderCircle,
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

