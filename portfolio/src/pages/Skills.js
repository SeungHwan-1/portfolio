// React
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const list = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const item = { hidden: { x: -10, opacity: 0 }, visible: { x: 0, opacity: 1 },transition: { duration: 2 } };

// React Server Components (이 부분은 필요에 따라 삭제할 수 있습니다)
const Skills = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        // "li" 선택자는 scope로 전달된 요소의 자식만 선택합니다.
        animate("li", { opacity: 1 }, { delay: 0.5 }); // 애니메이션 추가

    }, [animate]);

    return (
        <>
            <motion.ul initial="hidden" animate="visible" variants={list}>
                <motion.li variants={item}>Skill 1</motion.li>
                <motion.li variants={item}>Skill 2</motion.li>
                <motion.li variants={item}>Skill 3</motion.li>
            </motion.ul>
            <div onClick={() => animate(".boxes", { opacity: 0 })}>Click to hide boxes</div>
            <ul ref={scope}>sd
                <li className="boxes">Box 1</li>
                <li className="boxes">Box 2</li>
                <li className="boxes">Box 3</li>
            </ul>
        </>
    );
};

export default Skills;