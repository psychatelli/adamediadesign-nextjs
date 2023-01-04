
import { motion } from 'framer-motion'
import styles from  './contentList.module.scss'
import Image from 'next/image'


const ContentSectionListWidget = ({ mainTitle, sectionItems }) => {


    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

    return (
            <div className={styles.categorySection}>
                  <div className={styles.categoryMainIitle}>
                    {mainTitle}
                  </div>

                {sectionItems.map(section => <motion.main 
                className={styles.categoryItem}
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }} // Set the transition to linear
                key={section.title}
                >

                    <div className={styles.title}>
                            <h2>
                            {section.title}
                            </h2>
                    </div>


                    <div className={styles.imgTextContainer}> 

                        <div className={styles.image}>
                            <Image
                            src={section.img}
                            alt="thumbnail"
                            // width="100%" 
                            // height="100%"
                            layout="fill"
                            // objectFit="contain"
                            priority={true}
                            />
                        </div>
                        
                        <div className={styles.text}>
                            {section.text}
                        </div>
                    </div>
                  </motion.main>)  
                }

            </div>
    )
}


export default ContentSectionListWidget