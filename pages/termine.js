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
            <td>Sa, 2. Mai 20</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 3. Mai 20</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>Sa, 16. Mai 20</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 17. Mai 20</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 23. Mai 20</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 24. Mai 20</td>
            <td>Uster, Buchholz</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>Sa, 6. Jun 20</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 7. Jun 20</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>Sa, 13. Jun 20</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td></td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 14. Jun 20</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td>8</td>
            <td></td>
            <td>8</td>
          </tr>
          <tr>
            <td>Sa, 4. Jul 20</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 5. Jul 20</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>Sa, 18. Jul 20</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td>8</td>
            <td></td>
            <td>8</td>
          </tr>
          <tr>
            <td>So, 19. Jul 20</td>
            <td>Zollikon, Freibad Fohrbach</td>
            <td>2</td>
            <td></td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 26. Jul 20</td>
            <td>Kloten, Beach-Town</td>
            <td>6</td>
            <td>8</td>
            <td>16</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 1. Aug 20</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 2. Aug 20</td>
            <td>Baden, Terrassenbad</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>Sa, 8. Aug 20</td>
            <td>Zürich, Freibad Allenmoos</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 9. Aug 20</td>
            <td>Zürich, Freibad Allenmoos</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 23. Aug 20</td>
            <td>Kloten, Beach-Town</td>
            <td>6</td>
            <td>8</td>
            <td>16</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 29. Aug 20</td>
            <td>Obfelden, Zendenfrei</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 30. Aug 20</td>
            <td>Obfelden, Zendenfrei</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
          <tr>
            <td>So, 13. Sep 20</td>
            <td>Kloten, Beach-Town</td>
            <td>6</td>
            <td>8</td>
            <td>16</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Sa, 19. Sep 20</td>
            <td>Obfelden, Zendenfrei</td>
            <td>3</td>
            <td>8</td>
            <td>16</td>
            <td></td>
          </tr>
          <tr>
            <td>So, 20. Sep 20</td>
            <td>Obfelden, Zendenfrei</td>
            <td>3</td>
            <td></td>
            <td>8</td>
            <td>16</td>
          </tr>
        </table>
      </div>
    </Layout>
  </>
);

export default Start;
