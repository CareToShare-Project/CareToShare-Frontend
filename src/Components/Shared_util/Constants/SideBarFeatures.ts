import {AiFillHome, AiFillEye} from 'react-icons/ai'
import {FaPeopleCarry, FaStarHalfAlt, FaPrayingHands} from 'react-icons/fa'
import {BiLoaderCircle, BiDonateHeart} from 'react-icons/bi'
import {BsChatText} from 'react-icons/bs'
import { SideBarFeaturesProp } from './Types'

export const donorFeatures: SideBarFeaturesProp['features'] = [
    {
        title: 'Home',
        icon : AiFillHome,
        link : ''
    },
    {
        title: 'Charity Foundations',
        icon : FaPeopleCarry,
        link: 'viewCharities'
    },
    {
        title: 'View Requests',
        icon: AiFillEye,
        link: 'viewRequests'
    },
    {
        title:'Donation Progess',
        icon: BiLoaderCircle,
        link: 'donationProgress'
    },
    {
        title: 'Review Charities',
        icon: FaStarHalfAlt,
        link: 'reviewCharities'
    }

]


export const adminFeatures = [


]

export const charityFeatures = [
    {
        title: 'Home',
        icon : AiFillHome,
        link : ''
    },
    {
        title:'Available Donations',
        icon: BiDonateHeart,
        link: 'viewDonations'
    },
    {
        title:'Request',
        icon: FaPrayingHands,
        link: 'makeRequest'
    },
    {
        title:'Request Progess',
        icon: BiLoaderCircle,
        link: 'requestProgress'
    },
    {
        title:'Send Message',
        icon: BsChatText,
        link: 'appreciativeMessage'
    },



]

