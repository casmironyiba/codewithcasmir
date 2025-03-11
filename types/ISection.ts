import {IChapter} from './IChapter'

export type ISection = {
  id: string;
  title: string;
  chapters: IChapter[];
};
