import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


const variants = {
  open: {
    Transition: {
      staggerChildren: 0.1,
    }

  },
  closed: {
    Transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
}

const ItemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
}



function Links() {

  const items = [
    "GitHub",
    "Linkedin",
    "Email",
    "Instagram",
    "Twitter",
  ]
  const urls = [
    "https://github.com/krishSibin",
    "https://linkedin.com/in/sibin-krishna-k-t-16bb93261",
    "mailto:sibinkrishnakt@gmail.com",
    "https://www.instagram.com/______sibi_____/",
    "https://twitter.com/xavisib"
  ]

  const icons = [
    faGithub,
    faLinkedin,
    faEnvelope,
    faInstagram,
    faTwitter,
  ];




  return (
    <motion.div className='links' variants={variants}>
      {items.map((items, index) => (
        <motion.a href={urls[index]} key={items} variants={ItemVariants} whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.95 }}>
          <motion.div className="linksRow" variants={variants}>
            <div className="icon">
              <FontAwesomeIcon className="icons" color="red" icon={icons[index]} />
            </div>
            {/* <motion.div className="RowName" variants={variants}>
              {items}
            </motion.div> */}
          </motion.div>

        </motion.a>
      ))}</motion.div>
  )
}

export default Links