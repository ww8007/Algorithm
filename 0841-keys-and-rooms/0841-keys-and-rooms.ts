function canVisitAllRooms(rooms: number[][]): boolean {
    const visited = new Array(rooms.length).fill(false);
    visited[0] = true;

    const dfs = (room: number) => {
        for (const key of rooms[room]) {
            if (!visited[key]) {
                visited[key] = true;
                dfs(key);
            }
        }
    };

    dfs(0);

    return visited.every(val => val);
}
