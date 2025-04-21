import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpg'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Sharma',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS, MD (General Medicine)',
        experience: '4 Years',
        about: 'Dr. Sharma is known for his patient-first approach and deep understanding of internal medicine. He believes in preventive healthcare and holistic treatment methods.',
        fees: 500,
        address: {
            line1: '17th Cross, Jayanagar',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Mehra',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO',
        experience: '3 Years',
        about: 'Dr. Mehra has experience in treating women’s health issues with compassion and modern medical practices. She is especially skilled in antenatal and infertility care.',
        fees: 600,
        address: {
            line1: 'Sector 21, Dwarka',
            line2: 'New Delhi, Delhi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Aisha Khan',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '1 Year',
        about: 'Dr. Khan offers personalized skincare treatments and is highly appreciated for her aesthetic procedures and acne treatments.',
        fees: 400,
        address: {
            line1: 'Baner Road',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Neha Sinha',

        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, DCH',
        experience: '2 Years',
        about: 'Dr. Sinha is an expert in treating neurological disorders like epilepsy, migraines, and stroke, using the latest treatment methodologies.',

        fees: 450,
        address: {
            line1: 'Banjara Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Arjun Reddy',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Reddy specializes in neonatal and child care with a warm and friendly approach, ensuring comfort for both kids and parents.',
        fees: 800,
        address: {
            line1: 'Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Vikram Patel',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Patel has a vast experience in neurology and is known for treating complex neuro conditions with care and precision.',
        fees: 800,
        address: {
            line1: 'Ellis Bridge',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Sneha Iyer',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS, MD (General Medicine)',
        experience: '4 Years',
        about: 'Dr. Iyer emphasizes preventive medicine and takes time to educate patients about healthy lifestyle choices.',
        fees: 500,
        address: {
            line1: 'Marine Drive',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Kavita Joshi',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS (Obstetrics & Gynaecology)',
        experience: '3 Years',
        about: 'Dr. Joshi provides complete women’s health solutions including safe delivery, PCOS treatment, and hormonal therapy.',
        fees: 600,
        address: {
            line1: 'Aliganj',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ritu Verma',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Skin & VD)',
        experience: '1 Year',
        about: 'Dr. Verma has a keen eye for cosmetic dermatology and has helped many patients with skin rejuvenation and pigmentation issues.',
        fees: 400,
        address: {
            line1: 'Gariahat Road',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rohan Das',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '2 Years',
        about: 'Dr. Das is a favorite among children for his playful demeanor and accurate diagnosis of childhood diseases.',
        fees: 450,
        address: {
            line1: 'Ashok Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Deepika Menon',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Menon is known for her compassionate care and detailed neurological assessments, especially in geriatric cases.',
        fees: 800,
        address: {
            line1: 'Kadavanthra',
            line2: 'Kochi, Kerala'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Manish Kulkarni',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Kulkarni handles patients with neurodegenerative disorders and is also active in clinical research.',
        fees: 800,
        address: {
            line1: 'FC Road',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Meera Deshmukh',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, MD (General Medicine)',
        experience: '4 Years',
        about: 'Dr. Deshmukh believes in evidence-based care and has helped hundreds of patients recover with lifestyle and diet changes.',
        fees: 500,
        address: {
            line1: 'MG Road',
            line2: 'Indore, Madhya Pradesh'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Nikhil Chopra',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, DNB (Gynae)',
        experience: '3 Years',
        about: 'Dr. Chopra handles complex pregnancies and reproductive issues, known for empathetic counseling and patient care.',
        fees: 600,
        address: {
            line1: 'Patel Nagar',
            line2: 'Patna, Bihar'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Anjali Roy',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDVL',
        experience: '1 Year',
        about: 'Dr. Roy specializes in laser treatments, skin allergies, and is popular for her calming consultations and accurate treatments.',
        fees: 400,
        address: {
            line1: 'Salt Lake',
            line2: 'Kolkata, West Bengal'
        }
    }
];
