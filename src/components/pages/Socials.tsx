import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

export default function SocialMedia() {
  return (
    <div className="social-container">
      <a href="https://github.com/nrlrzn" target="_blank" rel="noreferrer">
        <GithubOutlined />
      </a>
      <a
        href="https://www.linkedin.com/in/jan-noriel-razon-90aa04375/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinOutlined />
      </a>
      <a
        href="https://www.instagram.com/razonnoriel_/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramOutlined />
      </a>
    </div>
  );
}
