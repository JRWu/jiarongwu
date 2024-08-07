export default function Resume() {
  // TODO: Populate this w/ Latex Template, Github for Latex and the resume PDF?
  return (
    <div>
      <object
        data="/static/documents/JiaRongWu_CV_2024.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <p>
          {' '}
          Your browser cannot render this PDF:{' '}
          <a href="https://github.com/JRWu/cv/raw/main/JiaRongWu_CV_2024.pdf">
            Download Resume Here
          </a>{' '}
        </p>
      </object>
    </div>
  )
}
