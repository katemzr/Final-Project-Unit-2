import * as motion from "motion/react-client";

const Animation = () => {
    return (
        <motion.img
            src="/images/puzzle-piece-solid-full.svg"
            alt="Spinning Orange Puzzle Piece"
            style={{
                width: 100,
                height: 100
            }}
            animate={{
                rotate: [0, 10, -10, 0]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 0
            }}
        />
    );
};


export default Animation;