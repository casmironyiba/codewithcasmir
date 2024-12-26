import React, { useState } from 'react'
import styles from './fileUploadList.module.scss'
import { CancelSharp } from '@mui/icons-material'
import Button, { AddMoreButton } from '../button/Button'
import ViewButton from '../button/ViewButton'
import ViewLink from '../links/ViewLink'

interface FileUploadListProps {
  label: string;
  course:any;
}

const FileUploadList: React.FC<FileUploadListProps> = ({ label,course }) => {
  const [files, setFiles] = useState<{ file: File | null; name: string }[]>([])

  // Add a new file input
  const handleAddFile = () => {
    setFiles((prevFiles) => [...prevFiles, { file: null, name: '' }])
  }

  // Handle file input change
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newFiles = [...files]
    const file = e.target.files ? e.target.files[0] : null
    newFiles[index] = { file, name: file ? file.name : '' }
    setFiles(newFiles)
  }

  // Remove a file input
  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.label}>Add {label}</h2>
      {files.map((file, index) => (
        <div key={index} className={styles.wrapper}>
          <input
            type='file'
            onChange={(e) => handleFileChange(e, index)}
            className={styles.input}
          />
          <CancelSharp
            className={styles.removeIcon}
            sx={{ fontSize: '1rem', cursor: 'pointer' }}
            onClick={() => handleRemoveFile(index)}
          />
          {file.name && <p>{file.name}</p>}
        </div>
      ))}

      <div className={styles.buttonWrapper}>
        <div className={styles.addButtonWrapper}>
          <AddMoreButton type='button' onClick={handleAddFile}>
            Add More {label}
          </AddMoreButton>
        </div>

        <div className={styles.viewLinkWrapper}>
          <ViewLink href={`/dashboard/admin/courses/${course?.id}`}> View </ViewLink>
        </div>
      </div>
    </div>
  )
}

export default FileUploadList
