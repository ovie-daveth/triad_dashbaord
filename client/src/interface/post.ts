export interface dataProp {
    id: number,
    examType: string,
      subject: string,
      question: string,
      explanation: string,
      options: string[],
      correctOption: string,
      hints?: string,
      diagrams?: string
      examYear: string,
      createdAt: string,
      updatedAt: string
}