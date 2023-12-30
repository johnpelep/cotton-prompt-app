const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/Designs`

export const postComment = async (id: number, comment: string, userId: string) => {
  const res = await fetch(`${baseUrl}/${id}/Comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      comment,
      userId,
    }),
  })

  if (!res.ok) {
    throw new Error()
  }
}