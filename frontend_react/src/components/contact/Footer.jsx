import React from 'react'

function Footer() {
  return (


    <div className='bg-[#312E2E] flex justify-center items-center h-[30vh] '>
      {/* ----------------------- Social icons ---------------------------------------*/}
        <a href="/" className='md:mx-5'>
          <svg width="64" height="43" viewBox="0 0 74 53" fill="none" >
          <path fillRule="evenodd" clipRule="evenodd" d="M72.1981 8.27612C71.3501 5.01833 68.8514 2.45296 65.6785 1.58231C59.9285 0 36.8695 0 36.8695 0C36.8695 0 13.8106 0 8.06019 1.58231C4.88731 2.45296 2.38856 5.01833 1.54056 8.27612C0 14.1805 0 26.5 0 26.5C0 26.5 0 38.8191 1.54056 44.7239C2.38856 47.9816 4.88731 50.547 8.06019 51.4181C13.8106 53 36.8695 53 36.8695 53C36.8695 53 59.9285 53 65.6785 51.4181C68.8514 50.547 71.3501 47.9816 72.1981 44.7239C73.7391 38.8191 73.7391 26.5 73.7391 26.5C73.7391 26.5 73.7391 14.1805 72.1981 8.27612Z" fill="#F0B65A"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M29.9573 39.1741V16.1306L48.392 27.6528L29.9573 39.1741Z" fill="white"/>
          </svg>
        </a>
        <a href="/" className='md:mx-5'>
          <svg width="43" height="43" viewBox="0 0 53 53" fill="none" >
          <path fillRule="evenodd" clipRule="evenodd" d="M26.5021 0C19.3051 0 18.4019 0.0314687 15.5752 0.160104C12.7541 0.289292 10.8284 0.735927 9.14348 1.39125C7.40055 2.0681 5.92207 2.97352 4.44912 4.44703C2.97505 5.91999 2.06964 7.39846 1.39058 9.14084C0.733596 10.8263 0.286409 12.7526 0.15943 15.5726C0.0330029 18.3993 -0.00012207 19.303 -0.00012207 26.5C-0.00012207 33.6969 0.0318988 34.5974 0.159982 37.4241C0.289722 40.2452 0.736357 42.1709 1.39113 43.8558C2.06853 45.5987 2.97395 47.0772 4.44746 48.5502C5.91986 50.0242 7.39834 50.9319 9.14016 51.6087C10.8262 52.264 12.7524 52.7107 15.573 52.8399C18.3997 52.9685 19.3024 53 26.4988 53C33.6963 53 34.5967 52.9685 37.4234 52.8399C40.2445 52.7107 42.1724 52.264 43.8585 51.6087C45.6008 50.9319 47.0771 50.0242 48.5495 48.5502C50.0236 47.0772 50.929 45.5987 51.608 43.8564C52.2595 42.1709 52.7067 40.2446 52.8392 37.4246C52.9662 34.5979 52.9993 33.6969 52.9993 26.5C52.9993 19.303 52.9662 18.3998 52.8392 15.5732C52.7067 12.752 52.2595 10.8263 51.608 9.14139C50.929 7.39847 50.0236 5.91999 48.5495 4.44703C47.0754 2.97297 45.6014 2.06755 43.8568 1.39125C42.1674 0.735927 40.2407 0.289292 37.4195 0.160104C34.5928 0.0314687 33.693 0 26.4938 0H26.5021ZM24.1257 4.77562C24.8313 4.77452 25.6185 4.77562 26.503 4.77562C33.5785 4.77562 34.4171 4.80102 37.2112 4.92799C39.7949 5.04614 41.1972 5.47787 42.1313 5.84059C43.368 6.3209 44.2497 6.89507 45.1766 7.82257C46.1041 8.75006 46.6783 9.6334 47.1597 10.8701C47.5224 11.8031 47.9547 13.2054 48.0723 15.7891C48.1993 18.5827 48.2269 19.4218 48.2269 26.494C48.2269 33.5662 48.1993 34.4054 48.0723 37.1989C47.9541 39.7826 47.5224 41.1849 47.1597 42.118C46.6794 43.3546 46.1041 44.2352 45.1766 45.1621C44.2491 46.0896 43.3685 46.6638 42.1313 47.1441C41.1983 47.5085 39.7949 47.9391 37.2112 48.0573C34.4176 48.1842 33.5785 48.2119 26.503 48.2119C19.4269 48.2119 18.5883 48.1842 15.7948 48.0573C13.211 47.938 11.8087 47.5063 10.874 47.1436C9.63738 46.6633 8.75405 46.0891 7.82655 45.1616C6.89905 44.2341 6.32488 43.353 5.84346 42.1158C5.48075 41.1827 5.04846 39.7804 4.93087 37.1967C4.80389 34.4032 4.7785 33.564 4.7785 26.4874C4.7785 19.4108 4.80389 18.576 4.93087 15.7825C5.04902 13.1987 5.48075 11.7965 5.84346 10.8623C6.32378 9.62567 6.89905 8.74234 7.82655 7.81484C8.75405 6.88734 9.63738 6.31317 10.874 5.83175C11.8082 5.46738 13.211 5.03675 15.7948 4.91806C18.2394 4.80764 19.1868 4.77452 24.1257 4.76899V4.77562ZM40.6484 9.17558C38.8928 9.17558 37.4684 10.5983 37.4684 12.3545C37.4684 14.1101 38.8928 15.5345 40.6484 15.5345C42.404 15.5345 43.8284 14.1101 43.8284 12.3545C43.8284 10.5988 42.404 9.17447 40.6484 9.17447V9.17558ZM26.502 12.8909C18.9865 12.8909 12.8931 18.9843 12.8931 26.4998C12.8931 34.0153 18.9865 40.1059 26.502 40.1059C34.0175 40.1059 40.1086 34.0153 40.1086 26.4998C40.1086 18.9843 34.0169 12.8909 26.5014 12.8909H26.502ZM26.5019 17.6668C31.3801 17.6668 35.3353 21.6214 35.3353 26.5001C35.3353 31.3783 31.3801 35.3334 26.5019 35.3334C21.6232 35.3334 17.6686 31.3783 17.6686 26.5001C17.6686 21.6214 21.6232 17.6668 26.5019 17.6668Z" fill="#F0B65A"/>
          </svg>
        </a>
        <a href="/" className='md:mx-5'>
          <svg width="20" height="43" viewBox="0 0 25 53" fill="none" >
          <path fillRule="evenodd" clipRule="evenodd" d="M16.4442 53V26.4969H23.7602L24.7297 17.3638H16.4442L16.4566 12.7926C16.4566 10.4105 16.6829 9.13414 20.1043 9.13414H24.6779V0H17.3609C8.57195 0 5.47846 4.43054 5.47846 11.8813V17.3648H0V26.4979H5.47846V53H16.4442Z" fill="#F0B65A"/>
          </svg>
        </a>
        <a href="/" className='md:mx-5'>
          <svg width="55" height="43" viewBox="0 0 65 53" fill="none" >
          <path fillRule="evenodd" clipRule="evenodd" d="M31.1408 14.0988L31.2798 16.3912L28.9628 16.1105C20.5288 15.0345 13.1607 11.3854 6.90473 5.25671L3.84626 2.21578L3.05847 4.46139C1.39021 9.46724 2.45605 14.7538 5.93158 18.3093C7.7852 20.2743 7.36814 20.555 4.17064 19.3854C3.05847 19.0111 2.08532 18.7304 1.99264 18.8708C1.66826 19.1982 2.78043 23.4555 3.6609 25.1398C4.86575 27.4789 7.3218 29.7713 10.0095 31.1281L12.2802 32.2041L9.59248 32.2509C6.99741 32.2509 6.90473 32.2977 7.18277 33.2801C8.10958 36.321 11.7705 39.5491 15.8484 40.9526L18.7216 41.9351L16.2192 43.4322C12.5119 45.5842 8.15592 46.8006 3.79992 46.8942C1.7146 46.9409 0 47.1281 0 47.2684C0 47.7363 5.65354 50.3561 8.94371 51.3854C18.8142 54.4263 30.5384 53.1164 39.3431 47.9234C45.599 44.2275 51.855 36.8825 54.7744 29.7713C56.35 25.9819 57.9256 19.0579 57.9256 15.7362C57.9256 13.5842 58.0646 13.3035 60.6597 10.7304C62.1889 9.23332 63.6255 7.5959 63.9035 7.12806C64.3669 6.23917 64.3206 6.23917 61.9572 7.03449C58.0183 8.438 57.4622 8.25087 59.4085 6.1456C60.8451 4.64853 62.5596 1.93508 62.5596 1.13975C62.5596 0.999404 61.8645 1.23332 61.0768 1.65437C60.2426 2.12221 58.389 2.82397 56.9988 3.24502L54.4964 4.04034L52.2257 2.49648C50.9745 1.65437 49.2136 0.718702 48.2868 0.438C45.9234 -0.216971 42.3089 -0.123404 40.1772 0.625135C34.3846 2.7304 30.7237 8.1573 31.1408 14.0988Z" fill="#F0B65A"/>
          </svg>
        </a>
    </div>
  )
}

export default Footer