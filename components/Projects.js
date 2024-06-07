import { Divider } from "@mui/material";
import Project from "./Project";

export default function Projects({ projectInfo, category }) {
  return (
    <>
      {Object.entries(projectInfo).map(([project, info], index) => {
        return (
          <div key={project}>
            <Project project={project} info={info} category={category} />

            {index < Object.entries(projectInfo).length - 1 && (
              <Divider
                sx={{
                  borderBottomWidth: 1,
                  borderStyle: "dashed",
                  borderColor: "#000000",
                  margin: "0.75rem 0",
                }}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
