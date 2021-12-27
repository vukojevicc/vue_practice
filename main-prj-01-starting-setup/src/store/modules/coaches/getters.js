export default {
    coaches(state) {
        return state.coaches
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0
    },
    isCoach(_, getters, _2, rootGetters) {
        let coaches = getters.coaches
        let userId = rootGetters.userId

        return coaches.some(coach => coach.id === userId)
    },
    shouldUpdate(state) {
        let lastFetch = state.lastFetch
        if(!lastFetch) {
            return true
        }
        let currentTimestamp = new Date().getTime()
        return (currentTimestamp - lastFetch) / 1000 > 60
    }
}