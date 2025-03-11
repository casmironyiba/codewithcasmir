
import React, { FC, useEffect, useState } from 'react'
import FileUploadList from '@/ui/components/fileUploadList/FileUploadList'
import fetchCourse from '@/lib/helpers/fetchCourse'
import styled from 'styled-components'
import displayFlex from '@/lib/utilities/displayFlex'

const Container = styled.div`
  ${displayFlex('space-around', 'center', 'column nowrap')};
  gap: 5px;
  padding: 5px;
  width: 100%;

  }
`

const Wrapper = styled.div`
  width: 100%;
  // min-height: 100%;
  background: white;
  padding: 5px;
  ${displayFlex('center', 'center')};

  button {
    ${displayFlex('center', 'center')};
  }
`
interface Props {
  videos: any
  materials: any
  assignments: any
  courseVideos: any[]
  setVideos: any
  setAssignments: any
  setMaterials: any
}

const AddMore: FC<Props> = ({
  videos,
  setVideos,
  materials,
  setMaterials,
  assignments,
  setAssignments,
  courseVideos,
}) => {
  const [course, setCourse] = useState<any>({})
  const addFileInput = (type: 'videos' | 'materials' | 'assignments') => {
    const add = { file: null, name: '' }
    if (type === 'videos') setVideos((prev: any) => [...prev, add])
    else if (type === 'materials') setMaterials((prev: any) => [...prev, add])
    else if (type === 'assignments')
      setAssignments((prev: any) => [...prev, add])
  }

  const handleFileChange = (
    type: 'videos' | 'materials' | 'assignments',
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      const updatedFiles =
        type === 'videos'
          ? [...videos]
          : type === 'materials'
            ? [...materials]
            : [...assignments]
      updatedFiles[index] = { file, name: file.name }
      type === 'videos'
        ? setVideos(updatedFiles)
        : type === 'materials'
          ? setMaterials(updatedFiles)
          : setAssignments(updatedFiles)
    }
  }
  useEffect(() => {
    async function loadCourse() {
      let { courseData } = await fetchCourse({ id })
      setCourse(courseData)
    }

    loadCourse()
  }, [])
  console.log(`from admore ==> ${course}`)
  return (
    <Container>
      <Wrapper>
        <FileUploadList
          files={videos}
          onAddFile={() => addFileInput('videos')}
          onFileChange={(e: any, index: any) =>
            handleFileChange('videos', e, index)
          }
          label='Video'
        />

        <ul>
          {courseVideos?.map((url: any, index: any) => (
            <li key={index}>
              <video src={url} />
            </li>
          ))}
        </ul>
      </Wrapper>

      <Wrapper>
        <FileUploadList
          files={materials}
          onAddFile={() => addFileInput('materials')}
          onFileChange={(e: any, index: any) =>
            handleFileChange('materials', e, index)
          }
          label='Material'
        />
      </Wrapper>

      <Wrapper>
        <FileUploadList
          files={assignments}
          onAddFile={() => addFileInput('assignments')}
          onFileChange={(e: any, index: any) =>
            handleFileChange('assignments', e, index)
          }
          label='Assignment'
        />
      </Wrapper>
    </Container>
  )
}

export default AddMore
