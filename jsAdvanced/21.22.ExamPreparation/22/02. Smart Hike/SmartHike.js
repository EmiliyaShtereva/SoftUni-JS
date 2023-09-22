class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let usedResourses = time * 10;
        let difference = this.resources - usedResourses;

        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= usedResourses;
        this.listOfHikes.push({peak: peak, time: time, difficultyLevel: difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria === 'hard' || criteria === 'easy') {
            let allHikes = this.listOfHikes.filter((hike) => hike.difficultyLevel === criteria);
            let sortdeHikes = allHikes.sort((a, b) => a.time - b.time);
            let bestHike = sortdeHikes[0];

            if (bestHike === undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
        } else if (criteria === 'all') {
            let result = ["All hiking records:"];
            this.listOfHikes.forEach((hike) => result.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`));
            return result.join("\n");
        }
    }
}


const user = new SmartHike('Vili'); 
console.log(user.addGoal('Musala', 2925)); 
console.log(user.addGoal('Rui', 1706)); 
console.log(user.hike('Musala', 8, 'hard')); 
console.log(user.hike('Rui', 3, 'easy')); 
console.log(user.hike('Everest', 12, 'hard'));