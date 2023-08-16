import { Divider } from "@mui/material";
import Project from "./Project";

export default function Projects({ projectInfo }) {
  return (
    <>
      {Object.entries(projectInfo).map(([project, info], index) => {
        return (
          <>
            <Project project={project} info={info} />
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
          </>
        );
      })}
    </>
  );
}
