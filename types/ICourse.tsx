export default interface ICourse {
  id: string
  title: string
  description: string
  imageURL: string
  videoURL: string
  price: string
  category?: string
  status?: string
  noOfStudentEnrolled?: number
  instructorId:string
  createdAt: any
}
