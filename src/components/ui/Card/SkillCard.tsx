import { motion } from "motion/react"
import { LISTITEM_VARIANTS } from "../../../constants"
import { StyledSkillCard } from "../StyledComponents"

const SkillCard = ({ skill }: { skill: string }) => {
    return (
        <motion.div variants={LISTITEM_VARIANTS}>
            <StyledSkillCard>{skill}</StyledSkillCard>
        </motion.div>
    )
}

export default SkillCard