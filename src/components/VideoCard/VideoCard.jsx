import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------
import { RecordButton } from "../../components";

// CSS
import classesStyles from "./VideoCardStyles.module.css";

export default function VideoCard({ data }) {
  const navigate = useNavigate();
  const { video__card_container, video__card_header, video__card_body } =
    classesStyles;

  const _handleChangePage = () => {
    navigate(`/recording/${data.id}`);
  };

  return (
    <article className={video__card_container} onClick={_handleChangePage}>
      <div className={video__card_header}>
        <RecordButton />
      </div>
      <div className={video__card_body}>
        <h2>{data.label}</h2>
      </div>
    </article>
  );
}
