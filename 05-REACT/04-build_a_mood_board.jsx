export function MoodBoardItem({ color, image, description }) {
    return (
        <div className="mood-board-item" style={{ backgroundColor: color }}>
            <img className="mood-board-image" src={image} alt={description} />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    );
}

export function MoodBoard() {
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <div className="mood-board">
                <MoodBoardItem
                    color="blue"
                    image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
                    description="Picture of a pathway"
                />
                <MoodBoardItem
                    color="red"
                    image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
                    description="Picture of a shore"
                />
                <MoodBoardItem
                    color="green"
                    image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
                    description="Picture of some grass"
                />
            </div>
        </div>
    );
}