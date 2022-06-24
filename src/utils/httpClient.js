const API="https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDBhMWQ3ZjJhNTA2MGFjNjA5YWE3YjU1N2QzNGVkZSIsInN1YiI6IjYxMmE5NzA0MmM2YjdiMDA2MjZmMzIxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7hvBB5IrYNuhjEIRm2y5ZVbN5o6fiuJb8wd6nns1fxU",

        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((result) => result.json())
}