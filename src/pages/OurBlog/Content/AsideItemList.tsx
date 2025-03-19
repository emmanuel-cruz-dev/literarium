import { AsideItemListProps } from "types/types";
import { InformationList } from "../../../components/ui/InformationList";
import { FC } from "react";

const AsideItemList: FC<AsideItemListProps> = ({ title, dataArr }) => {
  return (
    <article className="blog-content__aside__item-container flex flex-col gap-6">
      <h2 className="blog-content__aside__item-title">{title}</h2>
      <InformationList data={dataArr} />
    </article>
  );
};

export default AsideItemList;
