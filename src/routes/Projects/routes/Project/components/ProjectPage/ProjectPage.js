import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import classes from './ProjectPage.scss'

const ProjectPage = ({ params, project }) => (
  <div className={classes.container}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} component="h2">
          {project.name || 'Project'}
        </Typography>
        <Typography className={classes.subtitle}>
          {params.projectname}
        </Typography>
        <div>
          <pre>{JSON.stringify(project, null, 2)}</pre>
        </div>
      </CardContent>
    </Card>
  </div>
)

ProjectPage.propTypes = {
  project: PropTypes.object,
  params: PropTypes.object.isRequired
}

export default ProjectPage
