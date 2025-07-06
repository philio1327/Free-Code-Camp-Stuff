const projectStatus = {
    PENDING: { description: "Pending Execution" },
    SUCCESS: { description: "Executed Successfully" },
    FAILURE: { description: "Execution Failed" }
}
class ProjectIdea {

    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }

    updateProjectStatus(newStatus) {
        this.status = newStatus;
    }

};

class ProjectIdeaBoard {

    constructor(title) {
        this.ideas = []; // holds instances of ProjectIdea
        this.title = title;
    }

    pin(projectIdea) {
        this.ideas.push(projectIdea); // normally we would check if projectIdea is an instance of class ProjectIdea before doing this
    }

    unpin(projectIdea) {
        this.ideas = this.ideas.filter((idea) => idea !== projectIdea);
    }

    count() {
        return this.ideas.length;
    }

    formatToString() {
        let returnString = `${this.title} has ${this.count()} idea(s)\n`;
        this.ideas.forEach((idea) => {
            returnString += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
        });
        return returnString;
    }

}