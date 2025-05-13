
import { getMcqQuestions } from "@/lib/mcq-data"
import MCQQuestion from "@/components/shared/dashboard/mcq-page"
import { use } from "react"

const TestPage = ({ params }: { params: Promise<{ id: string; setId: string } >}) => {
  const { id, setId } = use(params)
  const questions = getMcqQuestions(id, setId)

  return (
    <div>
        <MCQQuestion questions={questions} bankId ={id} />
    </div>
  )
}

export default TestPage