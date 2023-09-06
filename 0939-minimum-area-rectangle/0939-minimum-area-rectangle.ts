function minAreaRect(points: number[][]): number {
    const set = new Set<string>();
    let min = Number.MAX_SAFE_INTEGER;

    for (const [x, y] of points) {
        set.add(`${x},${y}`);
    }

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            if (x1 !== x2 && y1 !== y2) {
                if (set.has(`${x1},${y2}`) && set.has(`${x2},${y1}`)) {
                    min = Math.min(min, Math.abs(x2 - x1) * Math.abs(y2 - y1));
                }
            }
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}
