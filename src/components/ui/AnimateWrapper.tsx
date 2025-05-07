import { motion } from "motion/react"
import { PAGE_VARIANTS } from "../../constants"

const AnimateWrapper = ({ children, key }: { children: React.ReactNode, key: string }) => {
    return (
        <motion.div
            key={key}
            variants={PAGE_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {children}
        </motion.div>
    )
}

export default AnimateWrapper