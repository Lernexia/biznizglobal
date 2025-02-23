import React from 'react'
import { AuditingAndAssuranceSVG, BusinessConsultantSVG, IpoListingSVG, TaxationAndAdvisorySVG } from "@/lib/svg/ServicesSVG";
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion'
import Reveal from '@/lib/animations/Revel.animation';

function BestSolutionForYourBusiness() {

    const services_data = [
        {
            title: "Auditing & Assurance",
            description:
                "We are specialized in Internal Audit , Due diligence , Stock Audits etc",
            image: <AuditingAndAssuranceSVG />,
            num: <svg width="100" height="70" viewBox="0 0 121 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3125 49.0625C17.3125 59.5956 19.2201 67.7664 23.2714 73.3355C27.3872 78.9933 33.554 81.75 41.5 81.75V78.75C34.321 78.75 29.1441 76.3088 25.6974 71.5707C22.1861 66.744 20.3125 59.3211 20.3125 49.0625H17.3125ZM41.5 81.75C49.2351 81.75 55.232 78.9794 59.2257 73.3178C63.1519 67.752 65 59.5889 65 49.0625H62C62 59.3277 60.1814 66.7584 56.7743 71.5885C53.4347 76.3227 48.4316 78.75 41.5 78.75V81.75ZM65 49.0625C65 38.6993 63.1508 30.6571 59.2191 25.1729C55.2214 19.5965 49.2254 16.875 41.5 16.875V19.875C48.4413 19.875 53.4453 22.2681 56.7809 26.9208C60.1826 31.6658 62 38.9674 62 49.0625H65ZM41.5 16.875C33.5634 16.875 27.3977 19.583 23.2782 25.1552C19.2214 30.6425 17.3125 38.6924 17.3125 49.0625H20.3125C20.3125 38.9742 22.1849 31.6804 25.6905 26.9386C29.1335 22.2815 34.3116 19.875 41.5 19.875V16.875ZM3.125 49.4375C3.125 34.4782 6.41122 23.539 12.7212 16.3488C18.9983 9.196 28.4941 5.5 41.5 5.5V2.5C27.9225 2.5 17.4809 6.37692 10.4663 14.37C3.48461 22.3256 0.125 34.1051 0.125 49.4375H3.125ZM41.5 5.5C54.2686 5.5 63.5899 9.19093 69.7547 16.339C75.9562 23.5296 79.1875 34.473 79.1875 49.4375H82.1875C82.1875 34.1104 78.8875 22.335 72.0265 14.3797C65.1289 6.38198 54.8564 2.5 41.5 2.5V5.5ZM79.1875 49.4375C79.1875 64.317 75.9569 75.1966 69.7574 82.3454C63.5933 89.4533 54.2712 93.125 41.5 93.125V96.125C54.8538 96.125 65.1255 92.2655 72.0238 84.3109C78.8868 76.3971 82.1875 64.683 82.1875 49.4375H79.1875ZM41.5 93.125C28.4916 93.125 18.9949 89.4483 12.7185 82.3356C6.41045 75.1872 3.125 64.3117 3.125 49.4375H0.125C0.125 64.6883 3.48539 76.4065 10.469 84.3206C17.4843 92.2705 27.9251 96.125 41.5 96.125V93.125ZM102 94H100.5V95.5H102V94ZM102 18.3125H103.5V16.8125H102V18.3125ZM92.625 18.3125H91.125V19.8125H92.625V18.3125ZM92.625 11.5L92.1455 10.0787L91.125 10.423V11.5H92.625ZM118.562 2.75H120.062V0.660922L118.083 1.3287L118.562 2.75ZM118.562 94V95.5H120.062V94H118.562ZM103.5 94V18.3125H100.5V94H103.5ZM102 16.8125H92.625V19.8125H102V16.8125ZM94.125 18.3125V11.5H91.125V18.3125H94.125ZM93.1045 12.9213L119.042 4.1713L118.083 1.3287L92.1455 10.0787L93.1045 12.9213ZM117.062 2.75V94H120.062V2.75H117.062ZM118.562 92.5H102V95.5H118.562V92.5Z" fill="#D2A024" />
            </svg>
            ,
        },
        {
            title: "Taxation & Advisory",
            description:
                "Your one stop solution for tax planning and consultation for Individuals and corporates",
            image: <TaxationAndAdvisorySVG />,
            num: <svg width="100" height="70" viewBox="0 0 156 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3125 47.0625C17.3125 57.5956 19.2201 65.7664 23.2714 71.3355C27.3872 76.9933 33.554 79.75 41.5 79.75V76.75C34.321 76.75 29.1441 74.3088 25.6974 69.5707C22.1861 64.744 20.3125 57.3211 20.3125 47.0625H17.3125ZM41.5 79.75C49.2351 79.75 55.232 76.9794 59.2257 71.3178C63.1519 65.752 65 57.5889 65 47.0625H62C62 57.3277 60.1814 64.7584 56.7743 69.5885C53.4347 74.3227 48.4316 76.75 41.5 76.75V79.75ZM65 47.0625C65 36.6993 63.1508 28.6571 59.2191 23.1729C55.2214 17.5965 49.2254 14.875 41.5 14.875V17.875C48.4413 17.875 53.4453 20.2681 56.7809 24.9208C60.1826 29.6658 62 36.9674 62 47.0625H65ZM41.5 14.875C33.5634 14.875 27.3977 17.583 23.2782 23.1552C19.2214 28.6425 17.3125 36.6924 17.3125 47.0625H20.3125C20.3125 36.9742 22.1849 29.6804 25.6905 24.9386C29.1335 20.2815 34.3116 17.875 41.5 17.875V14.875ZM3.125 47.4375C3.125 32.4782 6.41122 21.539 12.7212 14.3488C18.9983 7.196 28.4941 3.5 41.5 3.5V0.5C27.9225 0.5 17.4809 4.37692 10.4663 12.37C3.48461 20.3256 0.125 32.1051 0.125 47.4375H3.125ZM41.5 3.5C54.2686 3.5 63.5899 7.19093 69.7547 14.339C75.9562 21.5296 79.1875 32.473 79.1875 47.4375H82.1875C82.1875 32.1104 78.8875 20.335 72.0265 12.3797C65.1289 4.38198 54.8564 0.5 41.5 0.5V3.5ZM79.1875 47.4375C79.1875 62.317 75.9569 73.1966 69.7574 80.3454C63.5933 87.4533 54.2712 91.125 41.5 91.125V94.125C54.8538 94.125 65.1255 90.2655 72.0238 82.3109C78.8868 74.3971 82.1875 62.683 82.1875 47.4375H79.1875ZM41.5 91.125C28.4916 91.125 18.9949 87.4483 12.7185 80.3356C6.41045 73.1872 3.125 62.3117 3.125 47.4375H0.125C0.125 62.6883 3.48539 74.4065 10.469 82.3206C17.4843 90.2705 27.9251 94.125 41.5 94.125V91.125ZM92.625 92H91.125V93.5H92.625V92ZM92.625 79.5L91.7689 78.2683L91.125 78.7159V79.5H92.625ZM95.125 23.25H93.625V25.8184L95.862 24.5565L95.125 23.25ZM95.125 8.25L94.4405 6.91527L93.625 7.33349V8.25H95.125ZM118.062 77.625L117.176 76.4152L113.479 79.125H118.062V77.625ZM153.875 77.625H155.375V76.125H153.875V77.625ZM153.875 92V93.5H155.375V92H153.875ZM94.125 92V79.5H91.125V92H94.125ZM93.4811 80.7317C108.425 70.3438 119.709 60.815 127.271 52.1421C134.807 43.4997 138.812 35.5189 138.812 28.25H135.812C135.812 34.4395 132.37 41.7294 125.01 50.1704C117.677 58.5808 106.616 67.9479 91.7689 78.2683L93.4811 80.7317ZM138.812 28.25C138.812 23.9108 137.303 20.4474 134.135 18.1327C131.055 15.8819 126.617 14.875 121.062 14.875V17.875C126.341 17.875 130.028 18.8472 132.365 20.5548C134.614 22.1984 135.812 24.6725 135.812 28.25H138.812ZM121.062 14.875C111.633 14.875 102.734 17.2357 94.388 21.9435L95.862 24.5565C103.766 20.0977 112.159 17.875 121.062 17.875V14.875ZM96.625 23.25V8.25H93.625V23.25H96.625ZM95.8095 9.58473C103.722 5.52712 112.133 3.5 121.062 3.5V0.5C111.659 0.5 102.778 2.63955 94.4405 6.91527L95.8095 9.58473ZM121.062 3.5C131.84 3.5 139.645 5.66201 144.735 9.7338C149.761 13.7545 152.375 19.8311 152.375 28.25H155.375C155.375 19.1689 152.521 12.1205 146.609 7.3912C140.761 2.71299 132.16 0.5 121.062 0.5V3.5ZM152.375 28.25C152.375 42.8905 140.995 58.9559 117.176 76.4152L118.949 78.8348C142.88 61.2941 155.375 44.4429 155.375 28.25H152.375ZM118.062 79.125H153.875V76.125H118.062V79.125ZM152.375 77.625V92H155.375V77.625H152.375ZM153.875 90.5H92.625V93.5H153.875V90.5Z" fill="#D2A024" />
            </svg>
            ,
        },
        {
            title: "IPO Listing & Advisory Services",
            description:
                "Our IPO services guide you through the entire process, from planning and preparation to listing and beyond.",
            image: <IpoListingSVG />,
            num: <svg width="100" height="70" viewBox="0 0 154 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3125 47.0625C17.3125 57.5956 19.2201 65.7664 23.2714 71.3355C27.3872 76.9933 33.554 79.75 41.5 79.75V76.75C34.321 76.75 29.1441 74.3088 25.6974 69.5707C22.1861 64.744 20.3125 57.3211 20.3125 47.0625H17.3125ZM41.5 79.75C49.2351 79.75 55.232 76.9794 59.2257 71.3178C63.1519 65.752 65 57.5889 65 47.0625H62C62 57.3277 60.1814 64.7584 56.7743 69.5885C53.4347 74.3227 48.4316 76.75 41.5 76.75V79.75ZM65 47.0625C65 36.6993 63.1508 28.6571 59.2191 23.1729C55.2214 17.5965 49.2254 14.875 41.5 14.875V17.875C48.4413 17.875 53.4453 20.2681 56.7809 24.9208C60.1826 29.6658 62 36.9674 62 47.0625H65ZM41.5 14.875C33.5634 14.875 27.3977 17.583 23.2782 23.1552C19.2214 28.6425 17.3125 36.6924 17.3125 47.0625H20.3125C20.3125 36.9742 22.1849 29.6804 25.6905 24.9386C29.1335 20.2815 34.3116 17.875 41.5 17.875V14.875ZM3.125 47.4375C3.125 32.4782 6.41122 21.539 12.7212 14.3488C18.9983 7.196 28.4941 3.5 41.5 3.5V0.5C27.9225 0.5 17.4809 4.37692 10.4663 12.37C3.48461 20.3256 0.125 32.1051 0.125 47.4375H3.125ZM41.5 3.5C54.2686 3.5 63.5899 7.19093 69.7547 14.339C75.9562 21.5296 79.1875 32.473 79.1875 47.4375H82.1875C82.1875 32.1104 78.8875 20.335 72.0265 12.3797C65.1289 4.38198 54.8564 0.5 41.5 0.5V3.5ZM79.1875 47.4375C79.1875 62.317 75.9569 73.1966 69.7574 80.3454C63.5933 87.4533 54.2712 91.125 41.5 91.125V94.125C54.8538 94.125 65.1255 90.2655 72.0238 82.3109C78.8868 74.3971 82.1875 62.683 82.1875 47.4375H79.1875ZM41.5 91.125C28.4916 91.125 18.9949 87.4483 12.7185 80.3356C6.41045 73.1872 3.125 62.3117 3.125 47.4375H0.125C0.125 62.6883 3.48539 74.4065 10.469 82.3206C17.4843 90.2705 27.9251 94.125 41.5 94.125V91.125ZM92.625 5.75L92.194 4.31326L91.125 4.63395V5.75H92.625ZM140.562 46.6875L139.921 45.3317L136.991 46.7188L139.945 48.0543L140.562 46.6875ZM92.625 88.875H91.125V89.991L92.194 90.3117L92.625 88.875ZM92.625 73.875L93.1205 72.4592L91.125 71.7608V73.875H92.625ZM102 53.875H100.5V55.375H102V53.875ZM102 39.5V38H100.5V39.5H102ZM92.625 20.75H91.125V22.8642L93.1205 22.1658L92.625 20.75ZM93.056 7.18674C101.242 4.73088 109.846 3.5 118.875 3.5V0.5C109.57 0.5 100.674 1.76912 92.194 4.31326L93.056 7.18674ZM118.875 3.5C129.883 3.5 137.868 5.5141 143.07 9.30587C148.183 13.0333 150.812 18.6323 150.812 26.375H153.812C153.812 17.8677 150.869 11.2792 144.837 6.88163C138.892 2.5484 130.159 0.5 118.875 0.5V3.5ZM150.812 26.375C150.812 31.0948 149.873 34.9716 148.077 38.077C146.287 41.1707 143.593 43.5932 139.921 45.3317L141.204 48.0433C145.365 46.0735 148.546 43.2563 150.673 39.5792C152.794 35.9138 153.812 31.4885 153.812 26.375H150.812ZM139.945 48.0543C143.605 49.7094 146.291 52.0857 148.077 55.173C149.871 58.2749 150.812 62.1917 150.812 67H153.812C153.812 61.8083 152.796 57.3397 150.673 53.6708C148.543 49.9872 145.353 47.2072 141.18 45.3207L139.945 48.0543ZM150.812 67C150.812 75.1877 148.162 81.1033 143.041 85.0282C137.844 89.0109 129.871 91.125 118.875 91.125V94.125C130.17 94.125 138.917 91.9683 144.866 87.4093C150.89 82.7925 153.812 75.8957 153.812 67H150.812ZM118.875 91.125C109.846 91.125 101.242 89.8941 93.056 87.4383L92.194 90.3117C100.674 92.8559 109.57 94.125 118.875 94.125V91.125ZM94.125 88.875V73.875H91.125V88.875H94.125ZM92.1295 75.2908C100.628 78.2653 109.546 79.75 118.875 79.75V76.75C109.871 76.75 101.289 75.318 93.1205 72.4592L92.1295 75.2908ZM118.875 79.75C124.619 79.75 129.19 78.8012 132.363 76.6856C135.644 74.4984 137.25 71.187 137.25 67H134.25C134.25 70.313 133.043 72.6266 130.699 74.1894C128.248 75.8238 124.381 76.75 118.875 76.75V79.75ZM137.25 67C137.25 62.4254 136.207 58.7146 133.857 56.1441C131.484 53.5481 128.018 52.375 123.75 52.375V55.375C127.482 55.375 130.016 56.3894 131.643 58.1684C133.293 59.9729 134.25 62.8246 134.25 67H137.25ZM123.75 52.375H102V55.375H123.75V52.375ZM103.5 53.875V39.5H100.5V53.875H103.5ZM102 41H123.562V38H102V41ZM123.562 41C127.886 41 131.396 39.8308 133.802 37.2394C136.189 34.669 137.25 30.9547 137.25 26.375H134.25C134.25 30.5453 133.28 33.3935 131.604 35.1981C129.948 36.9817 127.364 38 123.562 38V41ZM137.25 26.375C137.25 22.5246 135.575 19.5278 132.296 17.5846C129.14 15.7143 124.599 14.875 118.875 14.875V17.875C124.401 17.875 128.298 18.7024 130.767 20.1654C133.112 21.5555 134.25 23.5587 134.25 26.375H137.25ZM118.875 14.875C109.546 14.875 100.628 16.3597 92.1295 19.3342L93.1205 22.1658C101.289 19.307 109.871 17.875 118.875 17.875V14.875ZM94.125 20.75V5.75H91.125V20.75H94.125Z" fill="#D2A024" />
            </svg>
            ,
        },
        {
            title: "Business Consulting",
            description:
                "Our management consultancy includes Business Planning and strategy development .",
            image: <BusinessConsultantSVG />,
            num: <svg width="100" height="70" viewBox="0 0 163 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3125 47.0625C17.3125 57.5956 19.2201 65.7664 23.2714 71.3355C27.3872 76.9933 33.554 79.75 41.5 79.75V76.75C34.321 76.75 29.1441 74.3088 25.6974 69.5707C22.1861 64.744 20.3125 57.3211 20.3125 47.0625H17.3125ZM41.5 79.75C49.2351 79.75 55.232 76.9794 59.2257 71.3178C63.1519 65.752 65 57.5889 65 47.0625H62C62 57.3277 60.1814 64.7584 56.7743 69.5885C53.4347 74.3227 48.4316 76.75 41.5 76.75V79.75ZM65 47.0625C65 36.6993 63.1508 28.6571 59.2191 23.1729C55.2214 17.5965 49.2254 14.875 41.5 14.875V17.875C48.4413 17.875 53.4453 20.2681 56.7809 24.9208C60.1826 29.6658 62 36.9674 62 47.0625H65ZM41.5 14.875C33.5634 14.875 27.3977 17.583 23.2782 23.1552C19.2214 28.6425 17.3125 36.6924 17.3125 47.0625H20.3125C20.3125 36.9742 22.1849 29.6804 25.6905 24.9386C29.1335 20.2815 34.3116 17.875 41.5 17.875V14.875ZM3.125 47.4375C3.125 32.4782 6.41122 21.539 12.7212 14.3488C18.9983 7.196 28.4941 3.5 41.5 3.5V0.5C27.9225 0.5 17.4809 4.37692 10.4663 12.37C3.48461 20.3256 0.125 32.1051 0.125 47.4375H3.125ZM41.5 3.5C54.2686 3.5 63.5899 7.19093 69.7547 14.339C75.9562 21.5296 79.1875 32.473 79.1875 47.4375H82.1875C82.1875 32.1104 78.8875 20.335 72.0265 12.3797C65.1289 4.38198 54.8564 0.5 41.5 0.5V3.5ZM79.1875 47.4375C79.1875 62.317 75.9569 73.1966 69.7574 80.3454C63.5933 87.4533 54.2712 91.125 41.5 91.125V94.125C54.8538 94.125 65.1255 90.2655 72.0238 82.3109C78.8868 74.3971 82.1875 62.683 82.1875 47.4375H79.1875ZM41.5 91.125C28.4916 91.125 18.9949 87.4483 12.7185 80.3356C6.41045 73.1872 3.125 62.3117 3.125 47.4375H0.125C0.125 62.6883 3.48539 74.4065 10.469 82.3206C17.4843 90.2705 27.9251 94.125 41.5 94.125V91.125ZM151.812 92V93.5H153.312V92H151.812ZM135.25 92H133.75V93.5H135.25V92ZM135.25 72.625H136.75V71.125H135.25V72.625ZM90.125 72.625H88.625V74.125H90.125V72.625ZM90.125 60.125L88.8592 59.3201L88.625 59.6885V60.125H90.125ZM126.688 2.625V1.125H125.864L125.422 1.82013L126.688 2.625ZM144.438 2.625L145.711 3.41723L147.137 1.125H144.438V2.625ZM109.062 59.5L107.789 58.7078L106.363 61H109.062V59.5ZM135.25 59.5V61H136.75V59.5H135.25ZM135.25 29.625V28.125H133.75V29.625H135.25ZM151.812 29.625H153.312V28.125H151.812V29.625ZM151.812 59.5H150.312V60.1588L150.798 60.6045L151.812 59.5ZM161.062 68H162.562V67.3412L162.077 66.8955L161.062 68ZM161.062 72.625V74.125H162.562V72.625H161.062ZM151.812 72.625V71.125H150.312V72.625H151.812ZM151.812 90.5H135.25V93.5H151.812V90.5ZM136.75 92V72.625H133.75V92H136.75ZM135.25 71.125H90.125V74.125H135.25V71.125ZM91.625 72.625V60.125H88.625V72.625H91.625ZM91.3908 60.9299L127.953 3.42987L125.422 1.82013L88.8592 59.3201L91.3908 60.9299ZM126.688 4.125H144.438V1.125H126.688V4.125ZM143.164 1.83277L107.789 58.7078L110.336 60.2922L145.711 3.41723L143.164 1.83277ZM109.062 61H135.25V58H109.062V61ZM136.75 59.5V29.625H133.75V59.5H136.75ZM135.25 31.125H151.812V28.125H135.25V31.125ZM150.312 29.625V59.5H153.312V29.625H150.312ZM150.798 60.6045L160.048 69.1045L162.077 66.8955L152.827 58.3955L150.798 60.6045ZM159.562 68V72.625H162.562V68H159.562ZM161.062 71.125H151.812V74.125H161.062V71.125ZM150.312 72.625V92H153.312V72.625H150.312Z" fill="#D2A024" />
            </svg>

        },
    ];



    return (
        <section className='pb-20 min-h-full h-full bg-white  w-full max-[500px]:pt-20'>
            <div className="sizer">
                <div className='text-center text-4xl font-bold'>
                    <h4>The Best Solutions for your</h4>
                    <h4 className='text-transparent bg-clip-text bg-gradient-to-tr from-gold2 to-gold1'>Business Challenges</h4>
                </div>
                <div className="cards py-20 flex gap-5 flex-wrap justify-center items-start">
                    {
                        services_data.map((data: any, index: number) => (
                            <motion.div
                                key={index}
                                className="card max-w-[20rem] p-5"
                                initial={{ opacity: 0, y: 30 }} // Initial state: invisible and slightly moved down
                                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and reset vertical position
                                transition={{
                                    delay: index * 0.1, // Stagger the animation for each card
                                    duration: 0.5, // Animation duration
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true }}>
                                <div className="header flex gap-3 items-start">
                                    <motion.div
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    viewport={{ amount: 0.5 }}
                                    className="icon bg-gradient-to-tr from-gold2 to-gold1  shadow-lg w-fit p-3 rounded-b-[30px] rounded-tl-[30px]">
                                        {data.image}
                                    </motion.div>
                                    <motion.div
                                        className='overflow-hidden'
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        viewport={{ amount: 0.5 }}
                                    >
                                        <h5>{data.num}</h5>
                                    </motion.div>

                                </div>
                                <div className="content flex flex-col gap-2 pt-3">
                                    <motion.h4 className='font-bold text-lg overflow-hidden'
                                        initial={{ opacity: 0, y: -50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        viewport={{ amount: 0.5 }}
                                    >{data.title}</motion.h4>

                                    <motion.p
                                        initial={{ opacity: 0, y: -50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        viewport={{ amount: 0.5 }}
                                        className='text-balance text-justify text-ellipsis'>{data.description}</motion.p>
                                </div>
                                <Link href='#' className='flex gap-1 shadow-lg bg-gradient-to-tr from-gold2 to-gold1 hover:rounded-full transition-all duration-150 w-fit rounded-br-full px-3 py-2 rounded-t-full mt-5 items-center justify-center text-white'>
                                    <motion.p
                                        initial={{ opacity: 0, y: -50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        viewport={{ amount: 0.5 }}
                                    >Explore More</motion.p>
                                    <MoveUpRight size={20} className='animate-pulse' />
                                </Link>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSolutionForYourBusiness
