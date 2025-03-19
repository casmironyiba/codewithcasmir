
import React from "react";
import styles from "./CustomFormField.module.scss";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
  useFieldArray,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/components/Form";
import { Input } from "@/ui/components/Input";
import { Button } from "@/ui/components/Button";
import { Textarea } from "@/ui/components/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/components/Select";
import { Switch } from "@/ui/components/Switch";
import { Edit, X, Plus } from "lucide-react";
import { registerPlugin } from "filepond";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface FormFieldProps {
  name: string;
  label: string;
  type?:
    | "text"
    | "email"
    | "textarea"
    | "number"
    | "select"
    | "switch"
    | "password"
    | "file"
    | "multi-input";
  placeholder?: string;
  options?: { value: string; label: string }[];
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  isIcon?: boolean;
  initialValue?: string | number | boolean | string[];
}

export const CustomFormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  options,
  accept,
  disabled = false,
  multiple = false,
  isIcon = false,
  initialValue,
}) => {
  const { control } = useFormContext();

  const renderFormControl = (
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            placeholder={placeholder}
            {...field}
            rows={3}
            className={styles.customFormField__textarea}
          />
        );
      case "select":
        return (
          <Select
            value={field.value || (initialValue as string)}
            defaultValue={field.value || (initialValue as string)}
            onValueChange={field.onChange}
          >
            <SelectTrigger className={styles.customFormField__select}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "switch":
        return (
          <div className={styles.customFormField__switchContainer}>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              id={name}
            />
            <FormLabel htmlFor={name} className={styles.customFormField__label}>
              {label}
            </FormLabel>
          </div>
        );
      case "file":
        return (
          <FilePond
            files={field.value ? [field.value] : []}
            allowMultiple={multiple}
            onupdatefiles={(fileItems) => {
              field.onChange(
                multiple
                  ? fileItems.map((fileItem) => fileItem.file)
                  : fileItems[0]?.file
              );
            }}
            acceptedFileTypes={accept ? [accept] : ["video/mp4", "video/webm"]}
            className={styles.customFormField__file}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            placeholder={placeholder}
            {...field}
            className={styles.customFormField__input}
            disabled={disabled}
          />
        );
      case "multi-input":
        return (
          <MultiInputField
            name={name}
            control={control}
            placeholder={placeholder}
          />
        );
      default:
        return (
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            className={styles.customFormField__input}
            disabled={disabled}
          />
        );
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={initialValue}
      render={({ field }) => (
        <FormItem className={styles.customFormField__container}>
          {type !== "switch" && (
            <div className="flex justify-between items-center">
              <FormLabel className={styles.customFormField__label}>
                {label}
              </FormLabel>
              {!disabled && isIcon && (
                <Edit className="size-4 text-customgreys-dirtyGrey" />
              )}
            </div>
          )}
          <FormControl>{renderFormControl(field)}</FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
};

// MultiInputField Component
interface MultiInputFieldProps {
  name: string;
  control: any;
  placeholder?: string;
}

const MultiInputField: React.FC<MultiInputFieldProps> = ({
  name,
  control,
  placeholder,
}) => {
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="space-y-2">
      {fields.map((field, index) => (
        <div key={field.id} className={styles.customFormField__multiInput}>
          <FormField
            control={control}
            name={`${name}.${index}`}
            render={({ field }) => (
              <FormControl>
                <Input {...field} placeholder={placeholder} />
              </FormControl>
            )}
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className={styles.customFormField__button}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append("")}
        className={styles.customFormField__button}
      >
        <Plus className="w-4 h-4 mr-2" /> Add Item
      </button>
    </div>
  );
};
