import HeaderBox from "@/components/header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance-box";

const Home = () => {
  const user = { firstName: "Sam", lastName: "Bowa", email: "youdotcom" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user="Sam"
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[{ currentBalance: 2000.45 }]}
            totalBanks={1}
            totalCurrentBalance={2000.45}
          />
        </header>
      </div>

      <RightSidebar user={user} />
    </section>
  );
};

export default Home;
