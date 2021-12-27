export default {
    async registerCoach(context, payload) {
        let userId = context.rootGetters.userId
        let coachData = {
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas
        }

        let response = await fetch(`https://vue-http-demo-b6857-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        })

        //let responseData = await response.json()

        if(!response.ok) {
            // error...
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        })
    },
    async loadCoaches(context, payload) {

        if(!context.getters.shouldUpdate && !payload.forceRefresh) {
            return
        }

        let response = await fetch(`https://vue-http-demo-b6857-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`)
        let responseData = await response.json()

        if(!response.ok) {
            let error = new Error(responseData.message || 'Failed to fetch.')
            throw error
        }

        let coaches = []

        for (let key in responseData) {
            let coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }
            coaches.push(coach)
        }
        context.commit('setCoaches', coaches)
        context.commit('setFetchTimestamp')
    }
}