class Collisions {
  static inCollision(gameObjectOne, gameObjectTwo) {
    const points1 = Collisions.getPoints(gameObjectOne)
    const points2 = Collisions.getPoints(gameObjectTwo)

    const diffs = []
    for (let i = 0; i < points1.length; i++) {
      const other = i != 0 ? points1[i-1] : points1.at(-1)
      diffs.push(points1[i].minus(other))
    }
    for (let i = 0; i < points2.length; i++) {
      const other = i != 0 ? points2[i-1] : points2.at(-1)
      diffs.push(points2[i].minus(other))
    }

    for (const diff of diffs) {
      const dots1 = points1.map(p => diff.orthogonal().dot(p))
      const dots2 = points2.map(p => diff.orthogonal().dot(p))

      const oneMin = Math.min(...dots1)
      const oneMax = Math.max(...dots1)
      const twoMin = Math.min(...dots2)
      const twoMax = Math.max(...dots2)

      if (oneMax < twoMin || twoMax < oneMin)
        return false
    }
    return true
  }

  static getPoints(gameObject) {
    const polygon = gameObject.getComponent(Polygon)
    const points = polygon.points
    const newPoints = points.map(v => v.scale(gameObject.transform.scale).plus(gameObject.transform.position))
    return newPoints

  }
}