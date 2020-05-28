import React from 'react';

import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';

import styles from './termine.sass';

const Start = () => (
  <>
    <DefaultHeader
      title="Termine | Mixed Beach-Tour"
      description="Alle Termine der Mixed Beach-Tour in einer Tabelle"
    />
    <Layout>
      <div className={styles.header}>
        <span>Termine</span>
      </div>
      <div className={styles.wrapper}>
        <table>
          <tr>
            <th>Datum</th>
            <th>Ort</th>
            <th>Courts</th>
            <th>MixA</th>
            <th>MixB</th>
            <th>MixC</th>
          </tr>
          <tr>
            <td>Sa, 13. Juni 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td></td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 14. Juni 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td>8</td>
            <td></td>
            <td>8</td>
          </tr>
          <tr>
            <td>Sa, 20. Juni 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td></td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 21. Juni 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td>8</td>
            <td></td>
            <td>8</td>
          </tr>
          <tr>
            <td>Sa, 27. Juni 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td></td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 28. Juni 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td>8</td>
            <td></td>
            <td>8</td>
          </tr>
          <tr>
            <td>Sa, 04. Juli 2020</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 05. Juli 2020</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>Sa, 11. Juli 2020</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 12. Juli 2020</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>Sa, 18. Juli 2020</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 19. Juli 2020</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 26. Juli 2020</td>
            <td>Kloten, Beach-Town</td>
            <td>6</td>
            <td>8</td>
            <td>16</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 01. August 2020</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 02. August 2020</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>Sa, 08. August 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td></td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 09. August 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td>8</td>
            <td></td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 15. August 2020</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 16. August 2020</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 23. August 2020</td>
            <td>Kloten, Beach-Town</td>
            <td>6</td>
            <td>8</td>
            <td>16</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 29. August 2020</td>
            <td>Obfelden, Zendenfrei</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 30. August 2020</td>
            <td>Obfelden, Zendenfrei</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 05. September 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td></td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 06. September 2020</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td>8</td>
            <td></td>
            <td>8</td>
          </tr>
          <tr>
            <td>So, 13. September 2020</td>
            <td>Kloten, Beach-Town</td>
            <td>6</td>
            <td>8</td>
            <td>16</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 19. September 2020</td>
            <td>Obfelden, Zendenfrei</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 20. September 2020</td>
            <td>Obfelden, Zendenfrei</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 26. September 2020</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 27. September 2020</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
        </table>
      </div>
    </Layout>
  </>
);

export default Start;
