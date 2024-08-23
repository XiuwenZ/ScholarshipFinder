export const addScholarship = async(data) => {
    await fetch('http://localhost:3001/data', {
    method: "POST",
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json'}
  }).then((response) => {
    //this console.log will be in our frontend console
    console.log(response.json())
  })
}

export const fetchScholarshipList = async () => {
  const response = await fetch('http://localhost:3001/data')
  const data = response.json()
  return data
}

export const fetchScholarship = async (name: any) => {
  const response = await fetch('http://localhost:3001/data')
  const data = response.json()
  return data
}