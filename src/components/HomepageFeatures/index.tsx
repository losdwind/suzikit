import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.features.easyToUse">Easy to Use</Translate>,
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <Translate id="homepage.features.easyToUse.description">
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </Translate>
      </>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.focusOnWhatMatters">
        Focus on What Matters
      </Translate>
    ),
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <Translate
          id="homepage.features.focusOnWhatMatters.description"
          values={{ code: <code>docs</code> }}
        >
          {
            "Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the {code} directory."
          }
        </Translate>
      </>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.poweredByReact">
        Powered by React
      </Translate>
    ),
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <Translate id="homepage.features.extendOrCustomize">
          Extend or customize your website layout by reusing React. Docusaurus
          can be extended while reusing the same header and footer.
        </Translate>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
